import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  test = "one way binding";
  test2:string;
  test3:string;
  constructor(){
    this.test2 = "one way binding test2 works";
    // this.test3 = "one way binding test3 works"
  }
  addClass = "attrclass";
  test1 =
    "another way interpolation<script>This script will not show in binding</script>";

  print(event) {
    console.log(event);
    this.name = event.target.value;
  }
}
// let joke = new AppComponent();
