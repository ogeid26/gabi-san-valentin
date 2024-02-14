import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CustomTabs() {
  return (
    <div className="flex flex-wrap">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3 space-x-1">
        <TabsTrigger className="border" value="bsas">
            Buenos Aires
          </TabsTrigger>
          <TabsTrigger className="border" value="lima">
            Lima
          </TabsTrigger>
          <TabsTrigger className="border" value="huacho">
            Huacho
          </TabsTrigger>
          

        </TabsList>
        <TabsContent value="bsas">
          <Card>
            <CardHeader>
            <CardTitle>Buenos Aires</CardTitle>

              <CardDescription>
               <p className="pt-2 pb-5"> Obviamente en esta ciudad hemos visitado la mayoría de los restaurantes de esta lista </p>
                <table className="w-full">
                  <tr>
                    <th className="text-left">Lugar</th>
                    <th className="text-right">Cuántas veces fuimos</th>
                  </tr>
                  <tr>
                    <td>La Pascana</td>
                    <td className="text-right">3</td>
                  </tr>
                  <tr>
                    <td>El Peruanito Ray</td>
                    <td className="text-right">3</td>
                  </tr>
                  <tr>
                    <td>Vive Café</td>
                    <td className="text-right">3</td>
                  </tr>             
                  <tr>
                    <td>Guerrín</td>
                    <td className="text-right">2</td>
                  </tr>
                  <tr>
                    <td>Miss Venezuela</td>
                    <td className="text-right">2</td>
                  </tr>
                  <tr>
                    <td>Bellagamba</td>
                    <td className="text-right">1</td>
                  </tr>

                  <tr>
                    <td>Don Shawarma</td>
                    <td className="text-right">1</td>
                  </tr>
                  <tr>
                    <td>Koi</td>
                    <td className="text-right">1</td>
                  </tr>
                  
                  <tr>
                    <td>Rita</td>
                    <td className="text-right">1</td>
                  </tr>
              
                
                </table>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
            
        </TabsContent>

        <TabsContent value="huacho">
          <Card>
            <CardHeader>
            <CardTitle>Huacho</CardTitle>

              <CardDescription>
              <p className="pt-2 pb-5"> Aunque solo estuvimos unos días aquí, me tomaste de la mano y me mostraste tus huequitos. Faltan un par pero no me acuerdo los nombres 😭 </p>

                <ul>
                <li>Alicia</li>
                    <li>Azkaban</li>
                    <li>La Estrella</li>
                    <li>La Nena</li>
                    <li> El lugar de pizzas en el que comimos la pizza de seco (no me acuerdo el nombre !!! )</li>
                    </ul>              
                     </CardDescription>
            </CardHeader>                     
          </Card>
        </TabsContent>

        <TabsContent value="lima">
          <Card>
            <CardHeader>
            <CardTitle>Lima</CardTitle>

              <CardDescription>
              <p className="pt-2 pb-5"> Estuvimos unas semanitas acá!
              Atesoro mucho nuestro tiempo en Lima. 
              Esta vez que regresé a Buenos Aires sabía que no me iba a costar la vida y que iba a llorar pensando en que extraño a todo el mundo porque tengo a mi gabiota. 
              En Lima o en Buenos Aires o en la ciudad más remota del mundo, juntos 💏  </p>
                <ul>
                  <li> El Bembos backroom de la Fontana</li>
                <li> Boba de Arenales </li>
                <li>Full Sanguchón</li>
                    <li>Primos</li>
                    <li>Tai Ga</li>
                    <li>Tip Top</li>
                    <li>Vida Sana</li>
                    </ul>              
                     </CardDescription>
            </CardHeader>                     
          </Card>
        </TabsContent>


        
      </Tabs>
    </div>
  );
}
