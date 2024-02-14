import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function CustomAccordion   () {
    return (
      <div className="w-full size">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Cuántas veces fuimos a La Pascana?            </AccordionTrigger>
          <AccordionContent> 3 veces! Una solos, una con Roger, y otra con Charo 😮
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>¿Cuántas fotos de Lami tengo en mi teléfono?  </AccordionTrigger>
          <AccordionContent>
            Guardadas y reconocidas por Google Photos 34, pero yo SÉ que tengo muchísísimas más almacenadas.         
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>¿Cuántas veces hemos ido al Jumbo que está por Cerviño?</AccordionTrigger>
          <AccordionContent>
            8 veces! Me pareció un montón, pero luego pienso que varias veces hemos ido para comer en Freddo y todo tiene sentido
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  