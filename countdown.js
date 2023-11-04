let time = 60;

while (time >= 0) {
  if (time === 60) {
    console.log(`${time}: One Minute to Liftoff.`);
  } else if (time > 10) {
    console.log(`${time}: All Systems Green.`);
  } else if (time >= 6) {
    console.log(`${time}: Starting Ignition Sequence.`);
  } else if (time >= 3) {
    console.log(`${time}: Ignition Complete.`);
  } else if (time >= 1) {
    console.log(`${time}: Full Power.`);
  } else {
    console.log(`${time}: Liftoff!`);
    break;
  }

  time--;
}
