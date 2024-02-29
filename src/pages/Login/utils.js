export function handleEyeClick(ref, value, setValue) {
  setValue(!value);
  if (ref.current.type === "text") {
    ref.current.type = "password";
  } else {
    ref.current.type = "text";
  }
}

export function handleLoginSubmit(e) {
  e.preventDefault();
}
