import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
  });

  const result = await masto.timelines.fetchPublic({
    limit: 30,
  });

  // `.done` represents whether there are more pages
  console.log(result.done);
  // `.value` contains response object
  console.log(result.value);

  // You can also use `for-await-of` syntax to iterate over the timeline
  for await (const statuses of masto.timelines.iteratePublic()) {
    for (const status of statuses) {
      masto.statuses.favourite(status.id);
    }
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
