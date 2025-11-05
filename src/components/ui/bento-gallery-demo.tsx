import InteractiveImageBentoGallery from "@/components/ui/bento-gallery"

const imageItems = [
  {
    id: 1,
    title: "Microsoft Office",
    desc: "A Vist to Microsoft Office",
    url: "/1718349305373.jpg",
    span: " md:row-span-2",
  },
  {
    id: 2,
    title: "Google Developers",
    desc: "A Conference by Google Developers",
    url: "/1756055104205.jpg",
    span: "md:row-span-1",
  },
  {
    id: 3,
    title: "Nike Product Manager",
    desc: "Engaging talks with Nike's Product Manager APAC",
    url: "/1756055113118.jpg",
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "Webinar",
    desc: "Webinar on Gen AI",
    url: "/1756047397759.jpg",
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "Fly Above",
    desc: "Travelling to meet new people",
    url: "/1756055097858.jpg",
    span: "md:row-span-1",
  },
  {
    id: 6,
    title: "Mathworks",
    desc: "A visit to mathwork office",
    url: "/1714834069996.jpg",
    span: "md:row-span-1",
  },
]

export default function InteractiveImageBentoGalleryDemo() {
  return (
    <InteractiveImageBentoGallery 
      imageItems={imageItems}
      title=""
      description=""
    />
  )
}
