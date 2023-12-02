"use client";

import { forwardRef, useState } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "./Icons";

interface SelectOption {
    value: any;
    label: string;
}

interface SingleSelectProps {
    multiple?: false;
    onChange: (value?: SelectOption) => void;
    value?: SelectOption;
}

interface MultipleSelectProps {
    multiple: true;
    onChange: (value: SelectOption[]) => void;
    value: SelectOption[];
}

type SelectProps = {
    className?: string;
    error?: boolean;
    isClearable?: boolean;
    placeholder?: string;
    options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = forwardRef<HTMLInputElement, SelectProps>(
    ({ className, error, isClearable, multiple, options, onChange, placeholder, value }, ref) => {
        const [isOpen, setIsOpen] = useState<boolean>(false);

        const clearSelection = () => {
            multiple ? onChange([]) : onChange(undefined);
        };

        const handleSelectOption = (option: SelectOption) => {
            setIsOpen(false);
            if (multiple) {
                if (value.map((v) => v.value).includes(option.value))
                    onChange(value.filter((v) => v.value !== option.value));
                else onChange([...value, option]);
            } else onChange(option);
        };

        return (
            <div
                className={clsx(
                    "relative w-full font-paragraph-lg bg-transparent py-4 border-b-1 border-forest-green flex items-center justify-between text-left",
                    error ? "outline-red-500 outline-2 outline" : "",
                    (multiple && !value?.length) || (!multiple && !value) ? "text-[rgba(0,0,0,.35)]" : "",
                    className
                )}
                onBlur={() => setIsOpen(false)}
                onClick={() => setIsOpen((b) => !b)}
                tabIndex={0}
            >
                {!multiple && <span className="flex-1">{value?.label || placeholder}</span>}
                {multiple && (
                    <div className="flex-1 flex gap-2 flex-wrap">
                        {value.length ? (
                            value.map((v) => (
                                <span
                                    className="flex items-center gap-2 rounded-full border-1 border-slate-500 px-3 cursor-pointer"
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        handleSelectOption(v);
                                    }}
                                    key={v.value}
                                >
                                    {v.label}
                                    <span className="text-20 translate-y-[2px]">&times;</span>
                                </span>
                            ))
                        ) : (
                            <span>{placeholder}</span>
                        )}
                    </div>
                )}
                <div className="flex items-center gap-2">
                    {isClearable && (
                        <button
                            className="bg-transparent text-forest-green opacity-60 hover:opacity-100 text-24"
                            onClick={(ev) => {
                                ev.stopPropagation();
                                clearSelection();
                            }}
                            type="button"
                        >
                            &times;
                        </button>
                    )}
                    <ChevronDownIcon className="w-[18px]" />
                </div>

                <div
                    className={clsx(
                        "absolute z-50 bg-white grid bottom-0 left-0 w-full translate-y-[calc(100%+2px)] rounded-md",
                        isOpen ? "block" : "hidden"
                    )}
                >
                    {options.map((option) => (
                        <div
                            className={clsx(
                                "text-left px-4 py-2 hover:bg-slate-200",
                                (!multiple && option.value === value?.value) ||
                                    (multiple && value.map((v) => v.value).includes(option.value))
                                    ? "bg-slate-100"
                                    : ""
                            )}
                            key={JSON.stringify(option.value)}
                            onClick={(ev) => {
                                ev.stopPropagation();
                                handleSelectOption(option);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);

Select.displayName = "Select";

export default Select;
