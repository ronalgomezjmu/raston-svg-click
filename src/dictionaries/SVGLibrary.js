import apd from "../components/svgs/tooltip/apd.svg";
import wheel from "../components/svgs/tooltip/aperture-wheel.svg";
import detector from "../components/svgs/tooltip/detector.svg";
import fcc from "../components/svgs/tooltip/fixed-corner-cube.svg";
import fm from "../components/svgs/tooltip/fixed-mirror.svg";
import frm from "../components/svgs/tooltip/flat-rotatable-mirror-1.svg";
import cdfrm from "../components/svgs/tooltip/flat-rotatable-mirror-2.svg";
import dcfrm from "../components/svgs/tooltip/flat-rotatable-mirror-3.svg";
import laser from "../components/svgs/tooltip/laser.svg";
import lecture from "../components/svgs/tooltip/lecture.svg";
import mcc from "../components/svgs/tooltip/movable-corner-cube.svg";
import pm from "../components/svgs/tooltip/parabolic-mirror.svg";
import pmh from "../components/svgs/tooltip/parabolic-mirror-hole.svg";
import pump from "../components/svgs/tooltip/pump.svg";
import sample from "../components/svgs/tooltip/sample-compartment.svg";
import source from "../components/svgs/tooltip/source.svg";

export const imgSource = {
  apd: apd,
  "aperture-wheel": wheel,
  "fixed-corner-cube": fcc,
  "fixed-mirror": fm,
  "flat-rotatable-mirror-1": frm,
  "flat-rotatable-mirror-3": cdfrm,
  "flat-rotatable-mirror-2": dcfrm,
  globar: source,
  insb: detector,
  laser: laser,
  lecture: lecture,
  mct: detector,
  "movable-corner-cube": mcc,
  "parabolic-mirror": pm,
  "parabolic-mirror-hole-1": pmh,
  "parabolic-mirror-hole-2": pmh,
  pump: pump,
  "sample-compartment": sample,
  tungsten: source,
};

export const toolTips = {
  apd: { title: "APD", text: "" },
  "aperture-wheel": { title: "Aperture Wheel", text: "" },
  "fixed-corner-cube": { title: "Fixed Corner Cube", text: "" },
  "fixed-mirror": { title: "Fixed Mirror", text: "" },
  "flat-rotatable-mirror-1": { title: "Flat Rotatable Mirror", text: "" },
  "flat-rotatable-mirror-2": { title: "Flat Rotatable Mirror", text: "" },
  "flat-rotatable-mirror-3": { title: "Flat Rotatable Mirror", text: "" },
  globar: { title: "Globar", text: "" },
  insb: { title: "INSB", text: "" },
  laser: { title: "Laser", text: "" },
  lecture: { title: "Lecture Bottle", text: "" },
  mct: { title: "MCT", text: "" },
  "movable-corner-cube": { title: "Movable Corner Cube", text: "" },
  "parabolic-mirror": { title: "Parabolic Mirror", text: "" },
  "parabolic-mirror-hole-1": { title: "Parabolic Mirror With Hole", text: "" },
  "parabolic-mirror-hole-2": { title: "Parabolic Mirror With Hole", text: "" },
  pump: { title: "Pump", text: "" },
  "sample-compartment": { title: "Sample Compartment", text: "" },
  tungsten: { title: "Tungsten", text: "" },
};
