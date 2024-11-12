## Skillonation Kids x Takeme2space Landing Page Documentation

---

### Header Section

**Skillonation Kids x TakeMe2Space**

---

### Introduction

**Who is TakeMe2Space?**

TakeMe2Space (TM2Space) is an organization on a mission to revolutionize how people interact with space. Founded by two passionate engineers, TM2Space aims to democratize space and make it accessible to everyone.

---

### Mission Statement

Our pioneering mission, set to launch via ISRO’s PSLV, allows young learners to explore satellite technology and its applications in monitoring UV A/B/C radiation and its impact on the ozone layer.

---

### Mission Details

To leverage satellite technology for detailed monitoring of UV A/B/C radiation across various regions, assessing its impact relative to ozone layer depletion. This data-driven approach aims to guide effective environmental and public health policies.

**Importance of This Experiment:**

- **Detailed UV Mapping:** Provides granular insights into UV radiation patterns.
- **Ozone Health Tracking:** Helps evaluate ozone recovery and its regional variations.
- **Policy Guidance:** Informs strategies to combat UV-related health risks and environmental issues.

---

### UV Hunters Activity

**Activity:** Monitor UV radiation levels in different parts of the world.

**Process:** Explain the importance of the ozone layer and how UV data helps in studying environmental health.

---

### Key Points to Highlight

- **350km, 55-degree Inclination:** Data observation.
- **Possibility and Data Collection:** Reference source - Wesat satellite - POEM 3 (previous mission) [https://wesat.in/](https://wesat.in/)
- **Importance:** Critical for understanding environmental health and UV radiation effects.

---

### Planned Project Process

**Duration:** 10-15 days  
**Fees:** ₹2500 - ₹3000

**Process Plan:**

- **Day 1: Introduction to Satellite Technology**
  - **Topics Covered:** Overview of satellites, types of orbits, introduction to satellite sensors and instruments.
  - **Activities:** Interactive presentation, discussion on how satellites are used in environmental monitoring.

- **Day 2: Understanding UV Radiation and the Ozone Layer**
  - **Topics Covered:** Basics of UV radiation, effects on Earth, and the role of the ozone layer in protection.
  - **Activities:** Video series, group discussions.

- **Day 3: Introduction to Data Collection Using Satellites**
  - **Topics Covered:** How satellites collect environmental data, specifics of UV sensors.
  - **Activities:** Demonstrations with software simulations.

- **Day 4: Data Analysis Basics**
  - **Topics Covered:** Introduction to statistical tools and data analysis software.
  - **Activities:** Hands-on practice with dummy data sets.

- **Day 5: Deep Dive into UV Data**
  - **Topics Covered:** Analyzing real UV data from satellites, understanding data formats.
  - **Activities:** Workshop on handling UV data.

- **Day 6: Problem Solving and Critical Thinking**
  - **Topics Covered:** Identifying patterns, anomalies in data sets.
  - **Activities:** Team exercises on hypothetical problem scenarios.

- **Day 7: Introduction to Node-MCU and Sensors**
  - **Topics Covered:** Basics of Node-MCU, overview of its capabilities, introduction to different sensors (like UV sensors).
  - **Activities:** Assemble the Node-MCU kit, connect it to a computer, and install the necessary software to program the microcontroller.

- **Day 8: Programming and Sensor Integration**
  - **Topics Covered:** Learn to write simple programs to read sensor data using the Arduino IDE.
  - **Activities:** Write a program to read data from the UV sensors connected to the Node-MCU. Understand how to interpret this data.

- **Day 9: Data Collection and Analysis**
  - **Topics Covered:** Collecting real-time data using the Node-MCU and connected sensors.
  - **Activities:** Set up experiments to collect UV data under different conditions. Begin simple data analysis using the data collected through the Node-MCU.

- **Day 10 (Optional): Advanced Data Analysis and Troubleshooting**
  - **Topics Covered:** Advanced programming techniques, troubleshooting sensor issues.
  - **Activities:** Analyze the collected data in more detail. Identify any issues in data collection and learn how to troubleshoot sensor and programming problems.

- **Day 11 (Optional): Project Presentation**
  - **Topics Covered:** Preparing a presentation of their findings.
  - **Activities:** Students prepare and present their findings from the data collected. Discuss potential real-world applications of their projects.

- **Day 12: Report Writing Skills**
  - **Topics Covered:** How to write scientific reports, presenting data findings.
  - **Activities:** Students draft reports based on mock data analysis.

- **Day 13: Presentation Skills**
  - **Topics Covered:** Effective communication and presentation techniques.
  - **Activities:** Students prepare presentations on their findings from Day 12.

- **Day 14: Project Work**
  - **Topics Covered:** Applying learned skills to a small project – predicting UV intensity.
  - **Activities:** Students work in groups to analyze a set of UV data, prepare a presentation.

- **Day 15: Presentation Day and Feedback**
  - **Topics Covered:** Presentation by students of their projects.
  - **Activities:** Feedback session, discussion on improvements, certificate distribution.

Each day includes a lecture or interactive session followed by hands-on activities to solidify learning.

---

### Our Collaborative Mission

**MOI-TD: My Orbital Infrastructure Technical Demonstration**

MOI represents a series of nano-satellites by TakeMe2Space that enable us to run compute in Low Earth Orbit (LEO). MOI satellites enable compute in-space with access to industry-specific sensors, high-speed communication, and reliable edge computing capabilities.

---

### Mission Specifications

**Sensors:**

- **Spectral Sensors**
  - Lux (lx)
  - RGB (wavelength of RGB)
  - UV A/B
  - IMU – BNO055 – A, M, G (non-fusion mode)
- **Temperature Sensor (inside)**
  - MCP9808
  - Temperature-controlled LiOn battery
- **Camera**
  - 8mm focal length, auto-focus mode available
  - RGB, 64MP
  - Image & Video [64MP Ultra High-Res Camera](https://www.arducam.com/64mp-ultra-high-res-camera-raspberry-pi/)

**Orbital Details of MOI-TD (tentative):**

- Altitude: 350Km
- Inclination: 55 degrees

**Processor:**

- **Persistent Storage Space:** 20 GB
- **No Global Clock:** Not synced with Earth’s clock
- **Core Processor:** Pi Zero
- **AI Processor:** Google Coral (4 TOPS)

**Final Experiment File:**

- **Max File Size:** 20 kilobytes (after compression)
  - Note: Pre-defined libraries can be uploaded to the satellite pre-launch to reduce the need for a larger final experiment file.

**Duration of an Experiment:**

- Experiment (code/AI model) can max run for 1-2 orbits. Each orbit is 90-100 minutes.
- Every experiment runs in isolation without any other experiment in parallel.

**Output Format of Experiment:**

- At the end of the experiment, a single zipped output file will be downloaded to the ground station. The zip will include:
  - Console Log of the application (experiment)
  - Media files created in the output folder

**How to Access Sensors:**

- **Sensors:** ZeroMQ/PyMQ
- **Camera:** Direct Command Line access
- **Other Recommended Ideas:** Support direct hardware access, if needed

**Downlink Specs of Satellite:**

- **Download Rate:** 1 Mega-bit per second
- **Download Window:** Max 10 mins per pass
- **Max Persistent Storage Downlink Queue (on Satellite):** 6MB

**Recommended Data Source:**

- **NASA ISS Feed:** Day and night

---

