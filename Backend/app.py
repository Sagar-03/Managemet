from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

# In-memory database for demonstration
data = {
    "employees": [],
    "tasks": [],
    "attendance": [],
}

# API endpoints

# 1. Onboard Employee
@app.route("/onboard_employee", methods=["POST"])
def onboard_employee():
    employee = request.json
    data["employees"].append(employee)
    return jsonify({"message": "Employee onboarded successfully!"}), 201

# 2. Assign Task
@app.route("/assign_task", methods=["POST"])
def assign_task():
    task = request.json
    data["tasks"].append(task)
    return jsonify({"message": "Task assigned successfully!"}), 201

# 3. Mark Attendance
@app.route("/mark_attendance", methods=["POST"])
def mark_attendance():
    attendance = request.json
    attendance_record = {
        "employee_id": attendance["employeeId"],
        "in_time": attendance["inTime"],
        "out_time": attendance.get("outTime"),
        "date": datetime.now().strftime("%Y-%m-%d"),
    }
    data["attendance"].append(attendance_record)
    return jsonify({"message": "Attendance marked successfully!"}), 201

# 4. Generate Reports
@app.route("/generate_report", methods=["GET"])
def generate_report():
    report_type = request.args.get("type", "daily")
    if report_type == "daily":
        today = datetime.now().strftime("%Y-%m-%d")
        attendance_today = [att for att in data["attendance"] if att["date"] == today]
        return jsonify({"report": attendance_today}), 200
    elif report_type == "tasks":
        return jsonify({"report": data["tasks"]}), 200
    elif report_type == "employees":
        return jsonify({"report": data["employees"]}), 200
    else:
        return jsonify({"error": "Invalid report type"}), 400

if __name__ == "__main__":
    app.run(debug=True)
