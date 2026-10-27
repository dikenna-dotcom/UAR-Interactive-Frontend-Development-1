const plannerForm = document.querySelector("#review-planner");
const plannerStatus = document.querySelector("#planner-status");
const reviewResult = document.querySelector("#review-result");
const reviewResultTitle = document.querySelector("#review-result-title");
const reviewSummary = document.querySelector("#review-summary");
const overallResult = document.querySelector("#overall-result");
const comparisonResults = document.querySelector("#comparison-results");
const reviewSteps = document.querySelector("#review-steps");
const selectedTopics = document.querySelector("#selected-topics");
const applicationNameInput = document.querySelector("#application-name");
const targetEnvironmentInput = document.querySelector("#target-environment");
const targetPlatformInput = document.querySelector("#target-platform");
const requiredMemoryInput = document.querySelector("#required-memory");
const availableMemoryInput = document.querySelector("#available-memory");
const requiredStorageInput = document.querySelector("#required-storage");
const availableStorageInput = document.querySelector("#available-storage");
const knownRequirementsInput = document.querySelector("#known-requirements");

const topicLabels = {
  dependencies: "Dependencies and versions",
  security: "Security and privacy",
  policy: "Organisation policy",
  operations: "Operational support"
};

const platformLabels = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux"
};

const statusLabels = {
  pass: "Pass",
  warning: "Warning",
  blocker: "Blocker"
};

function addSummaryItem(label, value) {
  const term = document.createElement("dt");
  const description = document.createElement("dd");
  term.textContent = label;
  description.textContent = value;
  reviewSummary.append(term, description);
}

function addListItem(list, text) {
  const item = document.createElement("li");
  item.textContent = text;
  list.append(item);
}

function updateRequiredField(input, label) {
  const message = input.value.trim() ? "" : `Enter ${label.toLowerCase()}.`;
  input.setCustomValidity(message);
}

function comparePlatforms(supportedPlatforms, targetPlatform) {
  if (supportedPlatforms.length === 0 || !targetPlatform) {
    return {
      label: "Operating system",
      status: "warning",
      message: "Choose the stated supported platforms and target operating system to compare them.",
      guidance: "Find the application's supported platforms and the target operating system from reliable sources."
    };
  }

  if (targetPlatform === "other") {
    return {
      label: "Operating system",
      status: "warning",
      message: "The target operating system is not covered by this simple comparison.",
      guidance: "Verify whether the application supports this target operating system using reliable documentation."
    };
  }

  const targetLabel = platformLabels[targetPlatform];
  const supportedLabels = supportedPlatforms.map((platform) => platformLabels[platform]);

  if (supportedPlatforms.includes(targetPlatform)) {
    return {
      label: "Operating system",
      status: "pass",
      message: `${targetLabel} is included in the supported platforms you entered (${supportedLabels.join(", ")}).`,
      guidance: "Verify that the application's platform information applies to the specific version and configuration being reviewed."
    };
  }

  return {
    label: "Operating system",
    status: "blocker",
    message: `${targetLabel} is not included in the supported platforms you entered (${supportedLabels.join(", ")}).`,
    guidance: "Resolve the stated operating-system mismatch or confirm the application's supported-platform information before proceeding."
  };
}

function compareCapacity(label, requirementInput, environmentInput) {
  const requiredValue = requirementInput.value.trim();
  const availableValue = environmentInput.value.trim();

  if (!requiredValue || !availableValue) {
    return {
      label,
      status: "warning",
      message: `Enter both the ${label.toLowerCase()} and the environment's available amount to compare them.`,
      guidance: `Find both the application's ${label.toLowerCase()} and the environment's available amount from reliable sources.`
    };
  }

  const requiredAmount = Number(requiredValue);
  const availableAmount = Number(availableValue);
  const requirementDescription = `${requiredAmount} GB required; ${availableAmount} GB available`;

  if (requiredAmount <= availableAmount) {
    return {
      label,
      status: "pass",
      message: `${requirementDescription}. The entered available amount meets the entered requirement.`,
      guidance: `Verify the ${label.toLowerCase()} figures and their units against reliable documentation.`
    };
  }

  return {
    label,
    status: "blocker",
    message: `${requirementDescription}. The entered available amount is below the entered requirement.`,
    guidance: `Resolve the stated ${label.toLowerCase()} shortfall or verify the figures before proceeding.`
  };
}

function getOverallStatus(comparisons) {
  if (comparisons.some((comparison) => comparison.status === "blocker")) {
    return "blocker";
  }

  if (comparisons.some((comparison) => comparison.status === "warning")) {
    return "warning";
  }

  return "pass";
}

function renderComparison(comparison) {
  const item = document.createElement("li");
  const heading = document.createElement("h4");
  const status = document.createElement("p");
  const message = document.createElement("p");

  item.className = `decision-card decision-${comparison.status}`;
  heading.textContent = comparison.label;
  status.className = "decision-status";
  status.textContent = statusLabels[comparison.status];
  message.textContent = comparison.message;
  item.append(heading, status, message);
  comparisonResults.append(item);
}

plannerForm.addEventListener("input", (event) => {
  if (event.target === applicationNameInput) {
    updateRequiredField(applicationNameInput, "an application name");
  }

  if (event.target === targetEnvironmentInput) {
    updateRequiredField(targetEnvironmentInput, "a target environment");
  }
});

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  updateRequiredField(applicationNameInput, "an application name");
  updateRequiredField(targetEnvironmentInput, "a target environment");

  if (!plannerForm.reportValidity()) {
    return;
  }

  const applicationName = applicationNameInput.value.trim();
  const targetEnvironment = targetEnvironmentInput.value.trim();
  const knownRequirements = knownRequirementsInput.value.trim();
  const supportedPlatforms = [
    ...plannerForm.querySelectorAll('input[name="supportedPlatforms"]:checked')
  ].map((platform) => platform.value);
  const checkedTopics = [
    ...plannerForm.querySelectorAll('input[name="topics"]:checked')
  ];
  const comparisons = [
    comparePlatforms(supportedPlatforms, targetPlatformInput.value),
    compareCapacity("Memory", requiredMemoryInput, availableMemoryInput),
    compareCapacity("Free storage", requiredStorageInput, availableStorageInput)
  ];
  const overallStatus = getOverallStatus(comparisons);

  reviewSummary.replaceChildren();
  comparisonResults.replaceChildren();
  reviewSteps.replaceChildren();
  selectedTopics.replaceChildren();

  addSummaryItem("Application", applicationName);
  addSummaryItem("Target environment", targetEnvironment);
  addSummaryItem("Additional notes", knownRequirements || "None entered.");
  addSummaryItem("Overall illustrative outcome", statusLabels[overallStatus]);
  overallResult.textContent = `Overall illustrative outcome: ${statusLabels[overallStatus]}. This result uses only the values entered above.`;

  comparisons.forEach((comparison) => {
    renderComparison(comparison);
    addListItem(reviewSteps, comparison.guidance);
  });
  addListItem(reviewSteps, "Record the sources, assumptions, and unresolved questions for a responsible human review.");

  if (checkedTopics.length === 0) {
    addListItem(selectedTopics, "No extra review topics selected.");
  } else {
    checkedTopics.forEach((topic) => {
      addListItem(selectedTopics, topicLabels[topic.value]);
    });
  }

  reviewResult.hidden = false;
  plannerStatus.textContent = `Comparison created. Overall illustrative outcome: ${statusLabels[overallStatus]}.`;
  reviewResultTitle.focus();
});

plannerForm.addEventListener("reset", () => {
  reviewResult.hidden = true;
  reviewSummary.replaceChildren();
  comparisonResults.replaceChildren();
  reviewSteps.replaceChildren();
  selectedTopics.replaceChildren();
  overallResult.textContent = "";
  plannerStatus.textContent = "The form and comparison have been cleared.";
  applicationNameInput.setCustomValidity("");
  targetEnvironmentInput.setCustomValidity("");
});
