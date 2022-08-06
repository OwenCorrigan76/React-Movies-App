import truncate from "lodash/truncate";

export function excerpt(string) {
  return truncate(string, {    
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
