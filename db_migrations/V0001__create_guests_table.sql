CREATE TABLE IF NOT EXISTS guests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    attendance VARCHAR(10) NOT NULL CHECK (attendance IN ('yes', 'no')),
    companion VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_guests_attendance ON guests(attendance);
CREATE INDEX idx_guests_created_at ON guests(created_at DESC);