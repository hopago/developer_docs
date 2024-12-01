import { Editor } from "./_components/editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentsIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div>
      <Editor />
    </div>
  );
};

export default DocumentsIdPage;