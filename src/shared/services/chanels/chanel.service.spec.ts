import { TestBed, inject } from "@angular/core/testing";

import { ChanelService } from "./chanel.service";

describe("ChanelService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChanelService]
    });
  });

  it("should ...", inject([ChanelService], (service: ChanelService) => {
    expect(service).toBeTruthy();
  }));
});
