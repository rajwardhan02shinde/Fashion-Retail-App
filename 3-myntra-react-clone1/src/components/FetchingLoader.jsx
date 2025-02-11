const FetchingLoader = () => {
  return (
    <div class="d-flex justify-content-center rs-spinner-container">
      <div
        class="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="visually-hidden rs-spinner">Loading...</span>
      </div>
    </div>
  );
};
export default FetchingLoader;
