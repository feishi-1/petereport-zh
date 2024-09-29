{% load i18n %}
# {% translate "Project Overview" %}

## {% translate "Description" %}

{{DB_report_query.product.description | safe}}

# {% translate "Executive Summary" %}

{{DB_report_query.executive_summary | safe}}

## {% translate "Summary of Findings Identified" %}

### {% translate "Breakdown by Severity" %}
![]({{report_executive_summary_image}})

{% if template_findings %}
### {% translate "Breakdown by CWE Categories" %}
![]({{report_cwe_categories_image}})

### {% translate "Breakdown by OWASP Categories" %}
![]({{report_owasp_categories_image}})

## {% translate "Findings" %}
{{pdf_finding_summary}}
{% endif %}
## {% translate "Scope" %}

### {% translate "In Scope" %}

{{DB_report_query.scope | safe}}

### {% translate "Out of Scope" %}

{{DB_report_query.outofscope | safe}}

## {% translate "Methodology" %}

{{DB_report_query.methodology | safe}}

## {% translate "Recommendations" %}

{{DB_report_query.recommendation | safe}}

{% if template_findings %}
\pagebreak
# {% translate "Findings and Risk Analysis" %}

{{template_findings}}
{% endif %}
\pagebreak
{{template_appendix}}

\pagebreak
