import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: 'Droplets',
      title: 'Полив растений',
      description: 'Индивидуальный график полива для каждого растения с учётом его потребностей',
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      icon: 'Sun',
      title: 'Контроль освещения',
      description: 'Перемещение растений к источникам света и защита от прямых лучей',
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      icon: 'Thermometer',
      title: 'Микроклимат',
      description: 'Поддержание оптимальной температуры и влажности воздуха',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: 'Scissors',
      title: 'Уход и обрезка',
      description: 'Удаление сухих листьев, рыхление почвы и опрыскивание',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: 'Camera',
      title: 'Фото-отчёты',
      description: 'Регулярные фотографии ваших растений с отчётом о проведённых работах',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      icon: 'AlertCircle',
      title: 'Экстренная помощь',
      description: 'Быстрое реагирование при обнаружении проблем со здоровьем растений',
      gradient: 'from-rose-400 to-red-500'
    }
  ];

  const tips = [
    {
      title: 'Перед отъездом',
      tips: [
        'Хорошо полейте все растения за 1-2 дня до отъезда',
        'Удалите все сухие листья и цветы',
        'Переставьте растения подальше от прямых солнечных лучей',
        'Оставьте подробные инструкции по уходу'
      ]
    },
    {
      title: 'Общие советы',
      tips: [
        'Не переливайте растения - избыток воды опаснее недостатка',
        'Каждое растение уникально - изучите его потребности',
        'Регулярно проветривайте помещение',
        'Используйте отстоянную воду комнатной температуры'
      ]
    },
    {
      title: 'Признаки проблем',
      tips: [
        'Желтеющие листья могут указывать на перелив',
        'Коричневые кончики листьев - низкая влажность воздуха',
        'Вялые листья - недостаток полива',
        'Бледные листья - нехватка света или питания'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Icon name="Leaf" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              GreenCare
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Услуги</a>
            <a href="#tips" className="text-gray-700 hover:text-emerald-600 transition-colors">Советы</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">О нас</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
            Оставить заявку
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Заботимся о ваших растениях
              <br />
              пока вы в отъезде
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Профессиональный уход за домашними растениями на время вашего отпуска или командировки. 
              Ваши зелёные друзья в надёжных руках! 🌿
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8">
                Заказать услугу
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-lg px-8">
                Узнать цены
              </Button>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-3xl -z-10 animate-float"></div>
            <img 
              src="https://cdn.poehali.dev/projects/ce2b0aff-d02e-4de0-bcfa-d1a22294d433/files/1d1d9b6e-097f-4421-9f5d-f26b9e8577ef.jpg"
              alt="Уход за растениями"
              className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full animate-scale-in"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Комплексный уход за вашими растениями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-emerald-200 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tips" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Советы по уходу
            </h2>
            <p className="text-xl text-gray-600">
              Полезная информация для заботы о растениях
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tips.map((section, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 border-emerald-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                      <Icon name="Lightbulb" className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex gap-2 text-gray-600">
                        <span className="text-emerald-500 mt-1">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                О нашем сервисе
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                GreenCare — это команда профессионалов, которые искренне любят растения. 
                Мы знаем, как сложно оставлять свои зелёные сокровища без присмотра во время отпуска.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Наш сервис работает с 2020 года и за это время мы позаботились о более чем 5000 растений. 
                Каждый член нашей команды имеет профильное образование и огромный опыт ухода за комнатными растениями.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">5000+</div>
                  <div className="text-sm text-gray-600">Растений под опекой</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">1200+</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-1">4.9</div>
                  <div className="text-sm text-gray-600">Средний рейтинг</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ce2b0aff-d02e-4de0-bcfa-d1a22294d433/files/35d2a46f-2a26-4808-acd9-52c6d93488b0.jpg"
                alt="Коллекция растений"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Оставьте заявку
            </h2>
            <p className="text-xl text-gray-600">
              Мы свяжемся с вами в течение часа
            </p>
          </div>

          <Card className="border-2 border-emerald-200 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-emerald-200 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-emerald-200 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Даты отъезда
                  </label>
                  <Input 
                    placeholder="С 1 по 15 ноября"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="border-emerald-200 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дополнительная информация
                  </label>
                  <Textarea 
                    placeholder="Количество растений, особенности ухода..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="border-emerald-200 focus:border-emerald-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg py-6"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-gray-600">
                <Icon name="Phone" className="text-emerald-600" size={20} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Icon name="Mail" className="text-emerald-600" size={20} />
                <span>info@greencare.ru</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Icon name="MapPin" className="text-emerald-600" size={20} />
                <span>Москва, ул. Садовая, 12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <Icon name="Leaf" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">GreenCare</span>
          </div>
          <p className="text-emerald-200 mb-4">
            Профессиональная забота о ваших растениях
          </p>
          <p className="text-emerald-300 text-sm">
            © 2024 GreenCare. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
