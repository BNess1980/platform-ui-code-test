import { ListComponent } from "./list.component";
import { StorageService } from "../services/storage.service";

describe("ListComponent", () => {
  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent(new StorageService());
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("unselected providers", () => {
    it("should have an initial length of 3", () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it("should have an id", () => {
      expect(component.unselectedProviders[0].id).toEqual("1");
    });

    it("should have a name", () => {
      expect(component.unselectedProviders[0].name).toEqual("John");
    });

    it("should have an address", () => {
      expect(component.unselectedProviders[0].address).toEqual(
        "123 Greenway Blvd"
      );
    });

    it("should have a phone", () => {
      expect(component.unselectedProviders[0].phone).toEqual("8991234321");
    });
  });

  describe("selected providers", () => {
    it("should have no initial length", () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe("addToSelected", () => {
    it("should add provider to selectedProviders", () => {
      let provider = component.unselectedProviders[0];
      component.addToSelected(provider);
      expect(component.selectedProviders.indexOf(provider)).toBeGreaterThan(-1);
    });
  });

  describe("removeFromSelected", () => {
    it("should remove provider from selectedProviders", () => {
      let provider = component.unselectedProviders[0];
      component.removeFromSelected(provider);
      expect(component.selectedProviders.indexOf(provider)).toEqual(-1);
    });
  });
});
