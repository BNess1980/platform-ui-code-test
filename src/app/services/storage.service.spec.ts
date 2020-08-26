import { TestBed, inject } from "@angular/core/testing";
import { StorageService } from "./storage.service";

describe("StorageService", () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService],
    });

    service = TestBed.get(StorageService);

    it("should create the service", () => {
      expect(service).toBeTruthy();
    });

    beforeEach(() => {
      var store = {};

      spyOn(localStorage, "getItem").and.callFake(
        (key: string): String => {
          return store[key] || null;
        }
      );
      spyOn(localStorage, "clearItem").and.callFake((key: string): void => {
        delete store[key];
      });
      spyOn(localStorage, "setItem").and.callFake(
        (key: string, value: string): string => {
          return (store[key] = <string>value);
        }
      );
      spyOn(localStorage, "clearAll").and.callFake(() => {
        store = {};
      });
    });

    /*
    it("should set an Item", () => {
      expect(localStorage.setItem("foo", "bar")).toBe("bar"); // bar
      expect(localStorage.getItem("foo")).toBe("bar"); // bar
    });

    it("should return null for non existing items", () => {
      expect(localStorage.getItem("foo")).toBeNull(); // null
    });

    it("should set and remove Item", () => {
      expect(localStorage.setItem("foo", "bar")).toBe("bar"); // bar
      expect(localStorage.clearItem("foo")).toBeUndefined(); // undefined
      expect(localStorage.getItem("foo")).toBeNull(); // null
    });

    it("should clear the storage", () => {
      expect(localStorage.setItem("foo", "bar")).toBe("bar"); // bar
      expect(localStorage.setItem("bar", "foo")).toBe("foo"); // foo
      expect(localStorage.clearAll()).toBeUndefined(); // undefined
      expect(localStorage.getItem("foo")).toBeNull(); // null
      expect(localStorage.getItem("bar")).toBeNull(); // null
    });
    */
  });
});
