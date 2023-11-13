import { Command } from "cmdk";
import { useState, useEffect } from "react";

// utility needed since cmdk converts selected values to lowercase
const areStringsEqualIgnoreCase = (str1?: string, str2?: string) => {
  return str1?.toLowerCase() === str2?.toLowerCase();
};

const HTMLRenderer = ({
  file,
  allFiles,
}: {
  file: string;
  allFiles: Array<string>;
}) => {
  const [html, setHtml] = useState("");

  const selectedFile = allFiles.find((each) =>
    areStringsEqualIgnoreCase(each, file),
  );

  useEffect(() => {
    if (selectedFile)
      fetch(`${window.location.href}/${selectedFile}`)
        .then((res) => res.text())
        .then((data) => setHtml(data));
  }, [selectedFile]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

// From: https://github.com/pacocoursey/cmdk/blob/main/website/components/cmdk/framer.tsx
export function CMDK({ files }: { files: Array<string> }) {
  const [value, setValue] = useState(files?.[2]?.toLocaleLowerCase() ?? "");
  return (
    <>
      <div className="h-[60vh] w-[75vw] rounded-md bg-white p-2 shadow-xl ring-2 ring-slate-300">
        <Command
          value={value}
          className="h-full"
          onValueChange={(v) => setValue(v)}
        >
          <div className="flex h-12 items-center gap-2 border-b-[1px] border-solid border-slate-300 px-2 pb-2 pt-0">
            <SearchIcon />
            <Command.Input
              className="w-full border-none text-base outline-none"
              autoFocus
              placeholder="Find components, packages, and interactions..."
            />
          </div>
          <style>{`div[cmdk-list-sizer] {height: 100%}`}</style>
          <Command.List className="mt-1 h-[calc(100%-48px)] overflow-auto">
            <div className="flex h-full">
              <div className="w-[40%] max-w-[200px]">
                <Command.Group
                  className="mb-2 select-none items-center px-2 text-xs text-gray-900"
                  heading="Components"
                >
                  {files.map((each) => {
                    return (
                      <Item
                        key={each}
                        isSelected={each.toLocaleLowerCase() === value}
                        value={each}
                        subtitle={`/${each}`}
                      />
                    );
                  })}
                </Command.Group>
              </div>
              <div className="mr-2 w-[1px] border-none bg-slate-300" />
              <div className="ml-2 flex w-full items-center justify-center rounded-lg">
                <HTMLRenderer file={value} allFiles={files} />
              </div>
            </div>
          </Command.List>
        </Command>
      </div>
    </>
  );
}

function Item({
  value,
  subtitle,
  isSelected,
}: {
  value: string;
  subtitle: string;
  isSelected: boolean;
}) {
  return (
    <Command.Item
      className={`content-visibility-auto mr-2 mt-1 flex cursor-pointer items-center gap-3 rounded-xl p-2 text-sm font-medium text-gray-950 transition-all ${
        isSelected && "bg-teal-600 text-white"
      }`}
      onSelect={() => (window.location.href = window.location.href + subtitle)}
      value={value}
    >
      <div className="flex flex-col gap-1">
        {value}
        <span
          className={`text-xs font-normal text-gray-800 ${
            isSelected && "text-white"
          }`}
        >
          {subtitle}
        </span>
      </div>
    </Command.Item>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
