import type { IProps } from "../interface";

const Data = ({num, onDelete, id, onUpdate, Average_Moudel}: IProps) => {
  return (
    <div className="module-card glass">
      <div className="module-header">
        <div className="module-number">#{num}</div>
        <button
          onClick={() => onDelete?.(id)}
          className="btn-delete"
          title="حذف المقياس"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="form-group">
        <label>معدل المقياس</label>
        <div className="stat-display">{Average_Moudel.toString()}</div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>أعمال موجهة (TP)</label>
          <input
            name="TP"
            onChange={(e) => onUpdate?.(e, id)}
            type="number"
            min="0"
            max="20"
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>الامتحان</label>
          <input
            name="Examn"
            onChange={(e) => onUpdate?.(e, id)}
            type="number"
            min="0"
            max="20"
            placeholder="0"
          />
        </div>
      </div>

      <div className="form-group">
        <label>النسبة المئوية</label>
        <div className="input-group-split">
          <div>
            <input
              name="input1"
              onChange={(e) => onUpdate?.(e, id)}
              type="number"
              min="0"
              max="1"
              step="0.01"
              placeholder="0.40"
            />
            <span className="label-small">TP</span>
          </div>
          <span className="divider">—</span>
          <div>
            <input
              name="input2"
              onChange={(e) => onUpdate?.(e, id)}
              type="number"
              min="0"
              max="1"
              step="0.01"
              placeholder="0.60"
            />
            <span className="label-small">الامتحان</span>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>المعامل</label>
        <input
          name="Average"
          onChange={(e) => onUpdate?.(e, id)}
          type="number"
          min="0"
          max="10"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default Data;