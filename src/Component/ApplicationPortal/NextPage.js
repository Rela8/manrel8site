import React, { useEffect } from "react";
import UploadIcon from "../../images/new-images/UploadIcon.png";
// import SubscriptionRates from "../../images/new-images/SubscriptionRates.png";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { getFormTwo, submitFormTwo } from "../../utils/api-calls";
import { toast } from "react-toastify";
import { ViewSubmittedDocument } from "../../utils/ExtraComponents";
import Loader from "../Loader/Loader";

const NextPage = ({ backfn }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      corporate_affairs_commision: "",
      first_year_of_buisness_plan: "",
      letter_of_breakdown_of_payment_and_docs_attached: "",
      second_year_of_buisness_plan: "",
      photocopy_of_your_reciept_issued_on_purchase_of_applicant_form: "",
    },
  });

  const {
    isLoading: formTwoLoading,
    isFetching,
    isError,
    data,
  } = useQuery("formtwo-details", getFormTwo, {
    refetchOnWindowFocus: false,
    select: (data) => data.results[0],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      const main_data = {
        corporate_affairs_commision: data?.corporate_affairs_commision,
        first_year_of_buisness_plan: data?.first_year_of_buisness_plan,
        letter_of_breakdown_of_payment_and_docs_attached:
          data?.letter_of_breakdown_of_payment_and_docs_attached,
        second_year_of_buisness_plan: data?.second_year_of_buisness_plan,
        photocopy_of_your_reciept_issued_on_purchase_of_applicant_form:
          data?.photocopy_of_your_reciept_issued_on_purchase_of_applicant_form,
      };
      reset(main_data);
    }
  }, [reset, data]);

  const { mutate, isLoading } = useMutation((data) => submitFormTwo(data), {
    onMutate: () => {
      toast.info("saving appliction details", {
        icon: false,
      });
    },
    onSuccess: () => {
      toast.success("application details saved", {
        icon: false,
      });
    },
    onError: () => {
      toast.error("couldnt svae application details", {
        icon: false,
      });
    },
  });

  const submitHandler = (data) => {
    let {
      corporate_affairs_commision,
      first_year_of_buisness_plan,
      letter_of_breakdown_of_payment_and_docs_attached,
      second_year_of_buisness_plan,
      photocopy_of_your_reciept_issued_on_purchase_of_applicant_form,
    } = data;
    const formData = new FormData();

    if (
      typeof corporate_affairs_commision !== "string" &&
      corporate_affairs_commision instanceof FileList
    ) {
      formData.append(
        "corporate_affairs_commision",
        corporate_affairs_commision[0]
      );
    }

    if (
      typeof first_year_of_buisness_plan !== "string" &&
      first_year_of_buisness_plan instanceof FileList
    ) {
      formData.append(
        "first_year_of_buisness_plan",
        first_year_of_buisness_plan[0]
      );
    }

    if (
      typeof letter_of_breakdown_of_payment_and_docs_attached !== "string" &&
      letter_of_breakdown_of_payment_and_docs_attached instanceof FileList
    ) {
      formData.append(
        "letter_of_breakdown_of_payment_and_docs_attached",
        letter_of_breakdown_of_payment_and_docs_attached[0]
      );
    }

    if (
      typeof second_year_of_buisness_plan !== "string" &&
      second_year_of_buisness_plan instanceof FileList
    ) {
      formData.append(
        "second_year_of_buisness_plan",
        second_year_of_buisness_plan[0]
      );
    }

    if (
      typeof photocopy_of_your_reciept_issued_on_purchase_of_applicant_form !==
        "string" &&
      photocopy_of_your_reciept_issued_on_purchase_of_applicant_form instanceof
        FileList
    ) {
      formData.append(
        "photocopy_of_your_reciept_issued_on_purchase_of_applicant_form",
        photocopy_of_your_reciept_issued_on_purchase_of_applicant_form[0]
      );
    }
    mutate(formData);
  };

  const corporateDocument = data?.corporate_affairs_commision;
  const letterOfBreakdownDocument =
    data?.letter_of_breakdown_of_payment_and_docs_attached;
  const firstYearDocument = data?.first_year_of_buisness_plan;
  const secondYearDocument = data?.second_year_of_buisness_plan;
  const photocopyDocument =
    data?.photocopy_of_your_reciept_issued_on_purchase_of_applicant_form;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="status-track">
        <div className="status-item">1</div>
        <div className="status-separator"></div>
        <div className="status-item">2</div>
      </div>
      {isLoading || isFetching || formTwoLoading ? (
        <Loader loading={isLoading || formTwoLoading || isFetching} />
      ) : !isError ? (
        <>
          <div className="half-input spaced">
            <div className="upload-img-con">
              <ViewSubmittedDocument link={corporateDocument} />
              {errors?.corporate_affairs_commision && (
                <h5 style={{ textAlign: "center" }}>invalid input</h5>
              )}
              Corporate Affairs Commission (CAC) Forms C02 and C07
              <label className="upload-btn" htmlFor="file-input1">
                <img alt="" src={UploadIcon} />
              </label>
              <input
                type="file"
                id="file-input1"
                hidden
                {...register("corporate_affairs_commision")}
              />
            </div>

            <div className="upload-img-con">
              <ViewSubmittedDocument link={firstYearDocument} />
              {errors?.first_year_of_buisness_plan && (
                <h5 style={{ textAlign: "center" }}>invalid input</h5>
              )}
              Company’s Certificate of Incorporation
              <label className="upload-btn" htmlFor="file-input2">
                <img alt="" src={UploadIcon} />
              </label>
              <input
                type="file"
                id="file-input2"
                hidden
                {...register("first_year_of_buisness_plan")}
              />
            </div>
          </div>

          <div className="half-input spaced">
            <div className="upload-img-con">
              <ViewSubmittedDocument link={letterOfBreakdownDocument} />
              {errors?.letter_of_breakdown_of_payment_and_docs_attached && (
                <h5 style={{ textAlign: "center" }}>invalid input</h5>
              )}
              A Covering Letter on the letter head of your company applying to
              be registered as a member of MAN, stating the breakdown of
              payments made and documents attached.
              <label className="upload-btn" htmlFor="file-input3">
                <img alt="" src={UploadIcon} />
              </label>
              <input
                type="file"
                id="file-input3"
                hidden
                {...register(
                  "letter_of_breakdown_of_payment_and_docs_attached"
                )}
              />
            </div>

            <div className="upload-img-con">
              <ViewSubmittedDocument link={secondYearDocument} />
              {errors?.second_year_of_buisness_plan && (
                <h5 style={{ textAlign: "center" }}>invalid input</h5>
              )}
              Copies of Duly Certified Audited Financial Statement for
              proceeding two (2) years or Business Plan for new companies
              <label className="upload-btn" htmlFor="file-input4">
                <img alt="" src={UploadIcon} />
              </label>
              <input
                type="file"
                id="file-input4"
                hidden
                {...register("second_year_of_buisness_plan")}
              />
            </div>
          </div>

          <div className="half-input spaced">
            <div className="upload-img-con">
              <ViewSubmittedDocument link={photocopyDocument} />
              {errors?.photocopy_of_your_reciept_issued_on_purchase_of_applicant_form && (
                <h5 style={{ textAlign: "center" }}>invalid input</h5>
              )}
              Photocopy of your receipt issued on purchase of Application Form.
              <label className="upload-btn" htmlFor="file-input5">
                <img alt="" src={UploadIcon} />
              </label>
              <input
                type="file"
                id="file-input5"
                hidden
                {...register(
                  "photocopy_of_your_reciept_issued_on_purchase_of_applicant_form"
                )}
              />
            </div>
          </div>
        </>
      ) : (
        <h5>cant fetch application data kindly refresh</h5>
      )}

      <h4 style={{ color: "#2b3513" }}>
        On receipt of the above, the company will be inspected for verification
        of claims on the Application Form.
      </h4>

      <h1>Special Notice</h1>
      <p className="generic-text">
        All payments should be made vide draft or cheque in favour of
        Manufacturers Association of Nigeria. All payments at the point of
        registration are non-refundable
      </p>
      <p className="generic-text">
        All information fields on the application form must be duly completed
      </p>
      <p className="generic-text">
        Only completed form with complete document will be processed
      </p>
      <p className="generic-text">
        Subscription payable is based on Turnover of the company as contained in
        the certified audited accounts or projected in the business plan of new
        companies
      </p>
      <p className="generic-text">
        All application process must be completed within the year of application
      </p>
      {/* <h1>REVISED SUBSCRIPTION RATES, EFFECTIVE JANUARY 1, 2021</h1>
      <div className="subscription-rates">
        <img alt="" src={SubscriptionRates} />
      </div> */}

      <h3 style={{ color: "red", textAlign: "center" }}>
        Submission of false information will lead to rejection
      </h3>

      <div className="btn-con align-center">
        <button disabled={isLoading}>Complete</button>
        <button disabled={isLoading} onClick={backfn}>
          Back
        </button>
      </div>
    </form>
  );
};

export default NextPage;
