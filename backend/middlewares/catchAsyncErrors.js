export const catchAsyncErrors = (theFunction) => {
    return (req, res, next) => {
      Promise.resolve(theFunction(req, res, next)).catch(next);
    };
  };
  // using this otherwise we need to handle the errors in every controlers saperately
  