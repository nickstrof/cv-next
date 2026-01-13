import { MainTemplate, NotFoundPage } from "@/components";
export default function CatchAllPage() {
  return (
    <MainTemplate hasBannerHeader={false} hasBannerFooter={false}>
      <NotFoundPage />
    </MainTemplate>
  );
}
// import {notFound} from 'next/navigation';
// export default function CatchAllPage() {
//   notFound();
// }
