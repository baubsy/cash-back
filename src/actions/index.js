export const paymentAction = payment => {
  return {
    type: 'PAYMENT',
    payload: payment
  };
};

export const roundStart = (target, current) => {
  return {
    type: 'START',
    payload:{
      target:target,
      current:  current}
  }
}
