const POI_PRIORITY = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1 };
const POI_STATE = { UNASSIGNED: 0, ASSIGNED: 1, IN_TRANSIT: 2, SURVEYING: 3, DATA_CREATED: 4, UPLOADING: 5, ACKNOWLEDGED: 6, SURVEYED: 7 };

function createPoI(id, name, x, y, priority, surveyRadius = 45, surveyDuration = 12) {
    return {
        id, name, x, y, priority, surveyRadius, surveyDuration,
        assignedUavId: null,
        state: 'UNASSIGNED',
        progress: 0,
        packetId: null,
        packetStatus: 'NOT_CREATED',
        evidence: null,
        route: null
    };
}

function defaultPois() {
  return [
    createPoI("POI-A", "Collapsed Bridge", 450, -80, "CRITICAL", 45, 10),
    createPoI("POI-B", "Hospital Wing", 510, -160, "HIGH", 45, 12),
    createPoI("POI-C", "School Building", 390, -180, "HIGH", 45, 12),
    createPoI("POI-D", "Residential Block", 560, -60, "MEDIUM", 45, 14),
    createPoI("POI-E", "Park Area", 590, -190, "LOW", 45, 15)
  ];
}
