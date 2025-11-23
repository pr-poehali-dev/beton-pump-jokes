import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [likedJokes, setLikedJokes] = useState<number[]>([]);

  const jokes = [
    {
      id: 1,
      title: 'Классификация',
      text: 'Автобетононасос — это когда ты не можешь определиться: ты машина или строительное оборудование? Так и живёшь в двух мирах!',
      likes: 42,
      emoji: '🚛'
    },
    {
      id: 2,
      title: 'На стройке',
      text: 'Директор стройки: "Нам нужен автобетононасос!" \nПрораб: "А можно просто ведро и лопату?" \nДиректор: "Нет! Нам нужно, чтобы это выглядело дорого!"',
      likes: 38,
      emoji: '🏗️'
    },
    {
      id: 3,
      title: 'Автомобильные пробки',
      text: 'Единственная машина, которую водители пропускают в пробке без вопросов — автобетононасос. Потому что бетон не ждёт!',
      likes: 55,
      emoji: '🚦'
    },
    {
      id: 4,
      title: 'Профессия',
      text: 'Оператор автобетононасоса — единственная профессия, где можно говорить: "Я управляю 20-метровой штангой" и это звучит нормально.',
      likes: 67,
      emoji: '👷'
    },
    {
      id: 5,
      title: 'Соседи',
      text: 'Соседи: "Опять эти стройки шумят!" \nАвтобетононасос: *изящно льёт бетон* \nТот же автобетононасос: "Я — искусство!"',
      likes: 44,
      emoji: '🎨'
    },
    {
      id: 6,
      title: 'Парковка',
      text: 'Пытаешься припарковать автобетононасос — это как играть в Jenga, только ставки выше!',
      likes: 51,
      emoji: '🎯'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Эпичная работа автобетононасоса',
      description: 'Когда твоя работа выглядит как танец!',
      thumbnail: '🎬',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      views: '1.2М'
    },
    {
      id: 2,
      title: 'ТОП-10 моментов с автобетононасосами',
      description: 'Приколы, которые заставят тебя смеяться!',
      thumbnail: '📹',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      views: '890К'
    },
    {
      id: 3,
      title: 'Когда автобетононасос показывает класс',
      description: 'Точность до миллиметра!',
      thumbnail: '🎥',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      views: '2.1М'
    },
    {
      id: 4,
      title: 'Неожиданные ситуации на стройке',
      description: 'С автобетононасосом не соскучишься!',
      thumbnail: '🎞️',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      views: '670К'
    }
  ];

  const toggleLike = (id: number) => {
    setLikedJokes(prev => 
      prev.includes(id) ? prev.filter(jId => jId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent/20">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-bounce-in">
            Автобетононасосы 🚛
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Самые весёлые приколы про самую серьёзную технику!
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge variant="secondary" className="text-lg px-6 py-2 hover:scale-110 transition-transform">
              🎉 100% юмор
            </Badge>
            <Badge variant="default" className="text-lg px-6 py-2 hover:scale-110 transition-transform">
              🏗️ 0% скуки
            </Badge>
          </div>
        </header>

        <Tabs defaultValue="jokes" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-14">
            <TabsTrigger value="jokes" className="text-lg font-semibold">
              <Icon name="Laugh" className="mr-2" size={20} />
              Приколы
            </TabsTrigger>
            <TabsTrigger value="videos" className="text-lg font-semibold">
              <Icon name="Video" className="mr-2" size={20} />
              Видео
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jokes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jokes.map((joke, index) => (
                <Card 
                  key={joke.id} 
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="text-5xl mb-2 group-hover:animate-wiggle">{joke.emoji}</div>
                      <Badge variant="outline" className="text-sm">
                        #{joke.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {joke.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4 text-foreground/80">
                      {joke.text}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => toggleLike(joke.id)}
                        className="flex items-center gap-2 text-lg font-semibold hover:scale-110 transition-transform"
                      >
                        <Icon 
                          name="Heart" 
                          className={likedJokes.includes(joke.id) ? 'fill-red-500 text-red-500' : ''} 
                          size={24} 
                        />
                        <span className={likedJokes.includes(joke.id) ? 'text-red-500' : ''}>
                          {joke.likes + (likedJokes.includes(joke.id) ? 1 : 0)}
                        </span>
                      </button>
                      <Badge className="text-sm px-4 py-1">
                        😂 Смешно!
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <Card 
                  key={video.id}
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => window.open(video.url, '_blank')}
                >
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg flex items-center justify-center text-8xl mb-4 group-hover:scale-105 transition-transform">
                      {video.thumbnail}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {video.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Eye" size={20} />
                        <span className="font-semibold">{video.views}</span>
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <Icon name="Play" size={16} />
                        Смотреть
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center text-muted-foreground animate-fade-in">
          <p className="text-lg mb-2">
            Сделано с ❤️ и чувством юмора
          </p>
          <p className="text-sm">
            © 2024 АвтобетононасосПриколы.ru
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
