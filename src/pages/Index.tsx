import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dates: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    { icon: 'Droplets', title: 'Полив' },
    { icon: 'Sun', title: 'Освещение' },
    { icon: 'Thermometer', title: 'Микроклимат' },
    { icon: 'Camera', title: 'Фото-отчёты' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center max-w-6xl">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🌿</span>
            <span className="text-xl font-bold text-gray-900">GreenCare</span>
          </div>
          <Button variant="outline" className="rounded-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 tracking-tight">
            Ваши растения
            <br />
            <span className="text-emerald-600">в надёжных руках</span>
          </h1>
          <p className="text-2xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Профессиональный уход пока вы в отъезде
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 py-7 text-lg">
            Оставить заявку
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-all duration-300 group-hover:scale-110">
                  <Icon name={service.icon as any} className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ce2b0aff-d02e-4de0-bcfa-d1a22294d433/files/307048ab-e866-4683-abbd-60a93847e8ad.jpg"
                alt="Уход за растениями"
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">
                Как это работает
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Оставьте заявку</h3>
                    <p className="text-gray-600">Укажите даты отъезда</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Мы приедем</h3>
                    <p className="text-gray-600">Составим график ухода</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Отдыхайте спокойно</h3>
                    <p className="text-gray-600">Получайте фото-отчёты</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-emerald-600">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Оставьте заявку
          </h2>
          <p className="text-xl text-emerald-100 mb-12">
            Мы свяжемся с вами в течение часа
          </p>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 text-lg"
                />
                <Input 
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 text-lg"
                />
                <Input 
                  placeholder="Даты отъезда"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="h-14 text-lg"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 h-14 text-lg rounded-full"
                >
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold text-gray-900">GreenCare</span>
            </div>
            <div className="flex gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <span>info@greencare.ru</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
