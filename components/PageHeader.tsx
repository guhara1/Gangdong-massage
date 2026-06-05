// 페이지 상단 제목 영역.
export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      {description ? <p className="page-lead">{description}</p> : null}
    </div>
  );
}
