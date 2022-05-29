import supertest from "supertest";
import app from "../index";
import imageExist from "../routes/utilities/imageExistence";
import path from "path";
import sharpImage from "../routes/utilities/sharpImageResize";

const request = supertest(app);

describe("Test responses from endpoints", () => {
  describe("endpoint: /", () => {
    it("gets /", async (): Promise<void> => {
      const response = await request.get("/");

      expect(response.status).toBe(200);
    });
  });

  describe("endpoint:/image", () => {
    it("gets /image", async (): Promise<void> => {
      const response = await request.get("/image");

      expect(response.status).toBe(200);
    });

    it("gets /image?imageId=fjord", async (): Promise<void> => {
      const response = await request.get("/image?imageId=fjord");

      expect(response.status).toBe(200);
    });

    it("gets /image?imageId=fjord&width=100&height=100", async (): Promise<void> => {
      const response = await request.get(
        "/image?imageId=fjord&width=100&height=100"
      );

      expect(response.status).toBe(200);
    });
  });
});

describe("Test image existance", () => {
  it("checks that there is no original image called test ", async (): Promise<void> => {
    const imageExistance = imageExist(
      path.resolve(__dirname, `../../../images/original/test.jpg`)
    );
    expect(imageExistance).toBeFalse();
  });

  it("checks that there is original image called fjord ", async (): Promise<void> => {
    const imageExistance = imageExist(
      path.resolve(__dirname, `../../images/original/fjord.jpg`)
    );
    expect(imageExistance).toBeTrue();
  });

  it("checks that there is resized image called test-200x100 ", async (): Promise<void> => {
    const imageExistance = imageExist(
      path.resolve(__dirname, `../../images/resized/test-200x100.jpg`)
    );
    expect(imageExistance).toBeTrue();
  });
});

describe("Test sharp image processing module", () => {
  it("checks that sharp module is defined ", async (): Promise<void> => {
    expect(sharpImage).toBeDefined();
  });

  it("checks that sharp module resized the image icelandwaterfall ", async (): Promise<void> => {
    const imageResized = await sharpImage({
      imageId: "icelandwaterfall",
      width: "100",
      height: "100",
    });

    expect(imageResized).toBeTrue();
  });
});
