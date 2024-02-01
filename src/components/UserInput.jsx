function UserInput({ values, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label id="label">INITIAL INVESTMENT</label>
          <input
            onChange={onChange}
            id="input"
            type="number"
            required
            name="initialInvestment"
            value={values.initialInvestment}
          />
        </p>
        <p>
          <label id="label">ANNUAL INVESTMENT</label>
          <input
            onChange={onChange}
            id="input"
            type="number"
            required
            name="annualInvestment"
            value={values.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label id="label">EXPECTED RETURN</label>
          <input
            onChange={onChange}
            id="input"
            type="number"
            required
            name="expectedReturn"
            value={values.expectedReturn}
          />
        </p>
        <p>
          <label id="label">Duration</label>
          <input
            onChange={onChange}
            id="input"
            type="number"
            required
            name="duration"
            value={values.duration}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
