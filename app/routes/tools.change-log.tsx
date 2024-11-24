export default function ChangeLog() {
  const changeLogEntries = [
    {
      date: "20.10.24",
      entries: [
        "Starting to learn Remix for potential new job.",
        "Planning on creating this website with Remix."
      ],
    },
    {
      date: "23-24.10.24",
      entries: [
        "Realizing this website in version 1.0."
      ],
    }
  ];

  return (
    <div className="page">
      <h2>Change Log</h2>
      <div>
        {changeLogEntries.map((entryGroup, index) => (
          <div key={index} className="mb-4">
            <div className="flex">
              <div className="font-bold w-32">{entryGroup.date}</div>
              <div className="flex-1">
                {entryGroup.entries.map((entry, entryIndex) => (
                  <p key={entryIndex} className="pl-4">{entry}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
