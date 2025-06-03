import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [AppComponent,UserComponent,TasksComponent,NewTaskComponent, HeaderComponent,TaskComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule,FormsModule],
  exports: [],
  providers: [],
  
})
export class AppModule {}