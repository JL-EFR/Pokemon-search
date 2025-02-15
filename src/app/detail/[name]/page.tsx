import { Attack } from "@/components/attacks";
import { CardDetail } from "@/components/cardDetail";
import { Evolution } from "@/components/evolution";

export default async function Detail({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  return (
    <div className="justify-center flex flex-col items-center">
      <div className="justify-center flex flex-col items-center">
        <CardDetail>{name}</CardDetail>
        <Attack>{name}</Attack>
        <Evolution>{name}</Evolution>
      </div>
    </div>
  );
}
