import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  test = "one way binding";
  addClass = "attrclass";
  test1 =
    "another way interpolation<script>This script will not show in binding</script>";

  print(event) {
    console.log(event);
    this.name = event.target.value;
  }
}
