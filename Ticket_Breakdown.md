# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Enable Facilities to save custom ids for Agents

Description:
Currently, the system uses the internal database id of Agents on generated reports. This ticket aims to enhance the system by allowing Facilities to save their own custom ids for the Agents they work with. The custom ids will then be used when generating reports for the Facilities.

Acceptance Criteria:

- Facilities can enter and save custom ids for Agents associated with their facility.
- The custom ids are associated with the respective Agents in the system.
- The custom ids are displayed and used in the generated reports instead of the internal database ids.

Effort Estimate: 3 story points

Implementation Details:

1. Modify the Agents table in the database schema to include a new column for custom ids.
2. Create an API endpoint for Facilities to update the custom ids of Agents.
3. Implement a user interface for Facilities to enter and save custom ids for Agents.
4. Modify the report generation function (`generateReport`) to fetch the custom ids of Agents and use them in the generated reports.

Ticket 2: Update getShiftsByFacility function to include custom Agent ids

Description:
The `getShiftsByFacility` function currently returns Shifts worked by Agents, but it does not include the custom ids assigned by Facilities. This ticket aims to update the function to include the custom Agent ids along with other metadata.

Acceptance Criteria:

- The `getShiftsByFacility` function retrieves Shifts worked by Agents, including the custom ids assigned by Facilities.
- The custom Agent ids are included in the returned Shifts metadata.

Effort Estimate: 2 story points

Implementation Details:

1. Modify the `getShiftsByFacility` function to join the Agents table and retrieve the custom ids along with other metadata for each Shift.
2. Update the data structure returned by the `getShiftsByFacility` function to include the custom Agent ids.

Ticket 3: Update generateReport function to use custom Agent ids

Description:
The `generateReport` function currently generates reports using the internal database ids of Agents. This ticket aims to update the function to use the custom Agent ids assigned by Facilities instead.

Acceptance Criteria:

- The `generateReport` function generates reports using the custom Agent ids instead of the internal database ids.
- The custom Agent ids are correctly displayed in the generated reports.

Effort Estimate: 3 story points

Implementation Details:

1. Modify the `generateReport` function to retrieve the custom Agent ids for each Shift from the database.
2. Replace the internal database ids with the custom Agent ids in the generated reports.
3. Test the generated reports to ensure the custom Agent ids are correctly displayed.

Ticket 4 (Optional): Backward compatibility for existing reports

Description:
This ticket is only necessary if there are existing reports generated with internal database ids that need to be maintained for backward compatibility. It aims to ensure that the system can still generate reports with the old internal database ids if needed.

Acceptance Criteria:

- The system provides an option to generate reports with either the custom Agent ids or the internal database ids.
- Reports generated with the internal database ids are consistent with the previous format.

Effort Estimate: 2 story points

Implementation Details:

1. Add a configuration option in the report generation process to choose between using custom Agent ids or internal database ids.
2. Modify the `generateReport` function to check the configuration and generate reports accordingly.
3. Update the user interface to allow Facilities to select the desired id format for reports.
