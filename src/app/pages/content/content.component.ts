import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/components/data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit  {
  photoCover:string ="https://melhoreseusresultados.com.br/wp-content/uploads/2023/04/Tony-Stark-Substituto-1024x576-1.jpg"
  contentTitle:string = "Minha Notícia" 
  contentDescription:string="Olá Mundo"

   private id:string | null="0"
  constructor(private route:ActivatedRoute){
    

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value=> this.id= value.get("id")
    )
    this.setValuesToComponent(this.id)
  }
    setValuesToComponent(id:string |null){
      const result = dataFake.filter(article => article.id==id)[0]
      this.contentTitle = result.titlle
      this.contentDescription=result.description
      this.photoCover = result.photo
    }
   
}
