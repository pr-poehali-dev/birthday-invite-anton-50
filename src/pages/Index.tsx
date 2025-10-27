import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    companion: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили вашу заявку. До встречи на празднике!",
    });
    setFormData({ name: '', attendance: '', companion: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto">
        
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <img 
                src="https://cdn.poehali.dev/projects/9ef1ad7d-5b83-415a-bbee-790e94b8fbf0/files/393eaa22-50b5-4543-b0cc-e1b160e7221e.jpg"
                alt="Детское фото"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-7xl font-bold text-primary tracking-tight">50</h1>
              <div className="space-y-2">
                <p className="text-2xl text-muted-foreground uppercase tracking-widest">Happy Birthday</p>
                <h2 className="text-5xl font-semibold text-foreground">Антон</h2>
              </div>
            </div>

            <div className="pt-8 space-y-3">
              <div className="flex items-center justify-center gap-3 text-lg">
                <Icon name="Calendar" size={20} className="text-primary" />
                <p className="text-foreground font-medium">29 ноября 2025</p>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg">
                <Icon name="Clock" size={20} className="text-primary" />
                <p className="text-foreground font-medium">Начало в 16:00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 space-y-12">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Icon name="Clock3" size={28} className="text-primary" />
                <h3 className="text-3xl font-semibold text-foreground">Тайминг</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <span className="font-semibold text-primary text-lg min-w-[70px]">16:00</span>
                  <div>
                    <p className="font-medium text-foreground">Сбор гостей</p>
                    <p className="text-sm text-muted-foreground">Встреча и приветствие</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <span className="font-semibold text-primary text-lg min-w-[70px]">17:00</span>
                  <div>
                    <p className="font-medium text-foreground">Начало праздника</p>
                    <p className="text-sm text-muted-foreground">Поздравления и тосты</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <span className="font-semibold text-primary text-lg min-w-[70px]">18:00</span>
                  <div>
                    <p className="font-medium text-foreground">Праздничный ужин</p>
                    <p className="text-sm text-muted-foreground">Вкусные блюда и общение</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <span className="font-semibold text-primary text-lg min-w-[70px]">20:00</span>
                  <div>
                    <p className="font-medium text-foreground">Развлекательная программа</p>
                    <p className="text-sm text-muted-foreground">Музыка, танцы и веселье</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Icon name="MapPin" size={28} className="text-primary" />
                <h3 className="text-3xl font-semibold text-foreground">Локация</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-lg text-foreground font-medium">Ресторан "Панорама"</p>
                <p className="text-muted-foreground">г. Москва, ул. Пушкина, д. 15</p>
                <div className="pt-4">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Icon name="Navigation" size={18} className="mr-2" />
                    Посмотреть на карте
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Icon name="Shirt" size={28} className="text-primary" />
                <h3 className="text-3xl font-semibold text-foreground">Дресс-код</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Приглашаем в элегантной вечерней одежде в природных тонах
                </p>
                <div className="flex gap-3 pt-2">
                  <div className="w-12 h-12 rounded-lg bg-[#8B7355] shadow-md border border-white/20"></div>
                  <div className="w-12 h-12 rounded-lg bg-[#5A6B4C] shadow-md border border-white/20"></div>
                  <div className="w-12 h-12 rounded-lg bg-[#D4C4B0] shadow-md border border-white/20"></div>
                  <div className="w-12 h-12 rounded-lg bg-[#2C3E2F] shadow-md border border-white/20"></div>
                  <div className="w-12 h-12 rounded-lg bg-[#A0826D] shadow-md border border-white/20"></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Icon name="Mail" size={28} className="text-primary" />
                <h3 className="text-3xl font-semibold text-foreground">RSVP</h3>
              </div>
              
              <p className="text-muted-foreground">
                Пожалуйста, подтвердите своё присутствие до 20 ноября
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Введите ваше имя"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground">Придете ли вы?</Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="font-normal cursor-pointer">
                        Да, обязательно приду!
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="font-normal cursor-pointer">
                        К сожалению, не смогу
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attendance === 'yes' && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="companion" className="text-foreground">
                      С кем придете? (опционально)
                    </Label>
                    <Input
                      id="companion"
                      value={formData.companion}
                      onChange={(e) => setFormData({ ...formData, companion: e.target.value })}
                      placeholder="Имя сопровождающего"
                      className="bg-background/50"
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  size="lg"
                >
                  Отправить ответ
                </Button>
              </form>
            </div>
          </Card>

          <div className="text-center py-12 space-y-4 animate-fade-in">
            <p className="text-2xl font-serif text-foreground">
              С нетерпением ждём встречи!
            </p>
            <div className="flex justify-center gap-2 text-4xl">
              🎉🎂🎈
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}