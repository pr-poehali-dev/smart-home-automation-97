import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-orange-500">Viid</span>ure
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Функции</a>
            <a href="#how-it-works" className="hover:text-gray-900">Как работает</a>
            <a href="#compatibility" className="hover:text-gray-900">Совместимость</a>
            <a href="#reviews" className="hover:text-gray-900">Отзывы</a>
            <a href="#download" className="hover:text-gray-900">Скачать</a>
          </nav>
        </div>
        <Button className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-6">
          Скачать
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto" id="features">
        <div className="inline-flex items-center bg-black text-white text-sm px-4 py-2 rounded-full mb-8">
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full mr-3">
            Новинка
          </span>
          Теперь с поддержкой облачного хранилища записей.
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Приложение для регистратора,
          <br />
          которое работает как{" "}
          <span className="text-orange-500">чёрный ящик</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Viidure превращает ваш смартфон в мощный видеорегистратор — с автоматической записью,
          облачным хранением и мгновенным доступом к записям в любой момент.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center" id="download">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3">
            <Icon name="Smartphone" size={16} className="mr-2" />
            Скачать для iOS
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-3 bg-transparent">
            <Icon name="Play" size={16} className="mr-2" />
            Скачать для Android
          </Button>
        </div>
      </section>

      {/* Partners/Trusted Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-gray-400 mb-6">Совместимо с популярными регистраторами</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-lg font-bold">Xiaomi</div>
            <div className="text-lg font-bold border-b-2 border-orange-500 pb-1">Viofo</div>
            <div className="text-2xl font-bold">70mai</div>
            <div className="text-lg font-bold">Garmin</div>
            <div className="text-lg font-medium">Nextbase</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 text-center" id="reviews">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-orange-100 mx-auto mb-6 flex items-center justify-center">
            <Icon name="Car" size={32} className="text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Простая настройка за 2 минуты
          </h3>
          <p className="text-gray-600 mb-2">
            "Установил Viidure, подключил регистратор — и всё. Записи автоматически сохраняются
            в облако, а доступ к ним есть прямо с телефона. Это то, чего давно не хватало."
          </p>
          <p className="text-sm text-gray-500">Алексей, пользователь Viidure • ★★★★★</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50" id="how-it-works">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-orange-500 font-medium mb-4">Функции</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Всё для вашей безопасности на дороге
          </h2>
          <p className="text-gray-600 mb-12">
            Viidure следит за дорогой, пока вы сосредоточены на вождении.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="rounded-full bg-transparent">
              Автозапись
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Облако
            </Button>
            <Button className="bg-orange-500 text-white rounded-full hover:bg-orange-600">
              GPS-трек
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Ночной режим
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              G-сенсор
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Detail Section */}
      <section className="py-16 px-6" id="compatibility">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="Video" size={24} className="text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Записи, которые
              <br />
              защитят вас в ДТП
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-orange-500 mr-3" />
                <span>Автоматическая запись при включении зажигания</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-orange-500 mr-3" />
                <span>Экстренное сохранение при резком торможении</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-orange-500 mr-3" />
                <span>Запись координат GPS к каждому видео</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-orange-500 mr-3" />
                <span>Мгновенная отправка видео в облако</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gray-900 rounded-2xl p-4 shadow-2xl">
              <div className="bg-gray-800 rounded-xl h-full p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-400">9:41</div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-semibold">● REC</span>
                    <span className="text-orange-400 text-xs">00:12:34</span>
                  </div>
                  <div className="bg-gray-900 rounded h-24 flex items-center justify-center">
                    <Icon name="Video" size={32} className="text-orange-500 opacity-60" />
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 flex-1">
                  <div className="text-white text-sm font-semibold mb-2">Последние записи</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-500 bg-opacity-20 rounded flex items-center justify-center">
                        <Icon name="Film" size={14} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-xs text-white">12 мая, 09:15</div>
                        <div className="text-xs text-gray-400">3:42 мин · 256 МБ</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-500 bg-opacity-20 rounded flex items-center justify-center">
                        <Icon name="Film" size={14} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-xs text-white">11 мая, 18:03</div>
                        <div className="text-xs text-gray-400">7:11 мин · 512 МБ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Скачайте Viidure бесплатно</h2>
          <p className="text-gray-400 mb-8">
            Доступно для iOS и Android. Начните защищать ваши поездки уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
              <Icon name="Apple" size={16} className="mr-2" />
              App Store
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 border-white text-white hover:bg-white hover:text-black bg-transparent">
              <Icon name="Play" size={16} className="mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">
            <span className="text-orange-500">Viid</span>ure
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-900">Условия использования</a>
            <a href="#" className="hover:text-gray-900">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
