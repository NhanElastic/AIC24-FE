import SearchBar from "./SearchBar";
import SearchOptions from "@/components/SearchImage/SearchOptions";
import { fetchImagesByText } from "@/lib/fetch";
import { useContext } from "react";
import { ImageResultContext } from "@/contexts/ImageResultContext";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SearchTextDto } from "@/types/dtos/search-text.type";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

export const searchOptions = [
  { label: "Text", value: "text" },
  { label: "Visual", value: "visual" },
  { label: "Related", value: "related" },
  { label: "Feedback", value: "feedback" },
];

export const searchModes = [
  { label: "Moment", value: "moment" },
  { label: "Cluster", value: "cluster" },
  { label: "Video", value: "location" },
];

export default function SearchImage() {
  const [, setSearchResults] = useContext(ImageResultContext);

  const form = useForm<SearchTextDto>({
    defaultValues: {
      mode: searchModes[0].value,
      type: searchOptions[0].value,
      text: "",
    },
  });
  const { register, watch, handleSubmit } = form;

  const fetchSearchResults = async () => {
    const result = await fetchImagesByText(watch("text"));
    setSearchResults(result);
  };

  const onSubmit: SubmitHandler<SearchTextDto> = (data) => console.log(data);

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-[1fr_auto_auto] gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SearchBar {...register("text", { required: true })} />
        <Controller
          name="type"
          render={({ field }) => (
            <SearchOptions
              options={searchOptions}
              onValueChange={field.onChange}
              defaultValue={watch("type")}
              value={field.value}
            />
          )}
        />

        <Controller
          name="mode"
          render={({ field }) => (
            <SearchOptions
              options={searchModes}
              onValueChange={field.onChange}
              defaultValue={watch("mode")}
              value={field.value}
            />
          )}
        />

        <Input className="col-span-3" type="submit" />
      </form>
    </Form>
  );
}
