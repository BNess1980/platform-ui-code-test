import { Component, OnInit } from "@angular/core";
import { provider } from "../models/provider.model";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: "1",
      name: "John",
      address: "123 Greenway Blvd",
      phone: "8991234321",
    },
    {
      id: "2",
      name: "Mary",
      address: "443 Windwhisper Road",
      phone: "2233211903",
    },
    {
      id: "3",
      name: "Jason",
      address: "9992 Pumpkin Hollow",
      phone: "4343219384",
    },
  ];

  constructor(private localStorage: StorageService) {
    // To clarify if this was sensitive data I would not advocate using localStorage
    // Also could have used a redux pattern for managing state
    // if localstorage is empty populate it with default values
    if (
      localStorage.getItem("selectedProviders") === null &&
      localStorage.getItem("unselectedProviders") === null
    ) {
      this.refreshState();
    } else {
      // otherwise load current app data state
      this.selectedProviders = this.localStorage.getItem("selectedProviders");
      this.unselectedProviders = this.localStorage.getItem(
        "unselectedProviders"
      );
    }
  }

  ngOnInit() {}

  addToSelected(provider: provider) {
    this.selectedProviders.push(provider);
    if (this.unselectedProviders.indexOf(provider) !== -1)
      this.unselectedProviders = this.removeFromArray(
        this.unselectedProviders,
        provider
      );
    this.refreshState();
  }

  removeFromSelected(provider: provider) {
    this.unselectedProviders.push(provider);
    this.selectedProviders = this.removeFromArray(
      this.selectedProviders,
      provider
    );
    this.refreshState();
  }

  refreshState() {
    this.localStorage.setItem("selectedProviders", this.selectedProviders);
    this.localStorage.setItem("unselectedProviders", this.unselectedProviders);
  }

  removeFromArray(arr: provider[], provider: provider): provider[] {
    return (arr = arr.filter((item) => item.id !== provider.id));
  }
}
