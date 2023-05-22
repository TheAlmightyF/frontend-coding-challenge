import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ImageTextSection = ({ blok }) => {
  return (
    <div className="">
      <h1 className="m-4 text-xl font-semibold">1-column text section</h1>
      <hr></hr>
      <div className="h-full mx-40 my-20 grid grid-cols-5 gap-4">
        <div className="relative h-full col-span-3">

          <h1 className="text-xl">
            Überschrift
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          
          <button className="absolute bottom-0 w-auto bg-orange-500 hover:bg-orange-700 text-white font-bold px-2 py-1 rounded-3xl border-orange-500 border-double border-4 bg-clip-padding" {...storyblokEditable(blok)}>
            {blok.button}
            Mehr Erfahren
          </button>

        </div>
        <div className="bg-contain bg-center col-span-2">

          <img src={"testimage.jpg"} alt="storyblok_demo" className="rounded-t-3xl bg-contain bg-center float-right" {...storyblokEditable(blok)}>
            {blok.image}
          </img>

        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;