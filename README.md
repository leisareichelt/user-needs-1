# user-needs

Add tasks, subtasks and user needs to the JSON file in the following format.
Create one json file per map.

{
  "name": "Sample task name",
  "subtasks": [
    {
      "name": "Subtask name",
      "needs": [
        {
          "1": "need 1",
          "2": "need 2"
        }
      ],
      "features": [
        {
          "1": "feature 1",
          "2": "feature 2"
        }
      ]
    }
  ]
}
