import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Save guest RSVP responses to database
    Args: event - dict with httpMethod, body, queryStringParameters
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database configuration missing'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    try:
        if method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            full_name = body_data.get('name', '').strip()
            attendance = body_data.get('attendance', '')
            companion = body_data.get('companion', '').strip() or None
            
            if not full_name or not attendance:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Name and attendance are required'}),
                    'isBase64Encoded': False
                }
            
            cur.execute(
                "INSERT INTO guests (full_name, attendance, companion) VALUES (%s, %s, %s) RETURNING id",
                (full_name, attendance, companion)
            )
            guest_id = cur.fetchone()[0]
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'id': guest_id,
                    'message': 'RSVP saved successfully'
                }),
                'isBase64Encoded': False
            }
        
        elif method == 'GET':
            cur.execute("""
                SELECT 
                    id, 
                    full_name, 
                    attendance, 
                    companion, 
                    created_at 
                FROM guests 
                ORDER BY created_at DESC
            """)
            
            guests = []
            for row in cur.fetchall():
                guests.append({
                    'id': row[0],
                    'full_name': row[1],
                    'attendance': row[2],
                    'companion': row[3],
                    'created_at': row[4].isoformat() if row[4] else None
                })
            
            cur.execute("SELECT COUNT(*) FROM guests WHERE attendance = 'yes'")
            yes_count = cur.fetchone()[0]
            
            cur.execute("SELECT COUNT(*) FROM guests WHERE attendance = 'no'")
            no_count = cur.fetchone()[0]
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'guests': guests,
                    'stats': {
                        'total': len(guests),
                        'coming': yes_count,
                        'not_coming': no_count
                    }
                }),
                'isBase64Encoded': False
            }
        
        else:
            return {
                'statusCode': 405,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Method not allowed'}),
                'isBase64Encoded': False
            }
    
    finally:
        cur.close()
        conn.close()
