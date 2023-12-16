import { Suspense } from 'react'
import Loading from '@/dashboard/loading';

function AssetJob(status:{status: string}) {
  return "Status: "+status.status;
}

const backendUrl = 'http://localhost:1080'

async function getData(suffix: string): Promise<{ status: string }> {
  const url = `${backendUrl}/${suffix}`;
  console.debug('Fetching data from: ' + url);
  const res = await fetch(url, { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const response = await res.json();
  console.debug('AssetJobStatus:' + JSON.stringify(response));
  return response;
}


export default async function AssetJobStatus() {
  const status = (await getData('assetImportJob')).status
  const statusSlow = (await getData('assetImportJobSlow')).status;
  // @ts-ignore
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <p><AssetJob status={status} /></p>
        <p><AssetJob status={statusSlow} /></p>
      </Suspense>
    </section>
  )
}
