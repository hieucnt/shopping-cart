export default function Modal({ isVisible, setVisible, removeProduct }) {
  return (
    isVisible && (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm</h5>
            <button type="button" className="btn-close" aria-label="Close" />
          </div>
          <div className="modal-body">
            <p>Are you sure to delete?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setVisible(false)}
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={removeProduct}
            >
              OK man
            </button>
          </div>
        </div>
      </div>
    )
  );
}
