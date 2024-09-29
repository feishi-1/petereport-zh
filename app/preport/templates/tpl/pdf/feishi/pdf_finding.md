{% load i18n %}

## {{finding.title|safe}}

::: {{icon_finding}}
**{% translate "Severity" %}:** {{severity_color_finding}}

**{% translate "CWE" %}:** {{finding.cwe.cwe_id}} - {{finding.cwe.cwe_name|safe}}

**{% translate "OWASP" %}:** {{finding.owasp.owasp_id|safe}} - {{finding.owasp.owasp_name|safe}}
:::

{% if finding.description %}
**【{% translate "Description" %}】**

{{finding.description|safe}}
{% endif %}

{% if finding.location %}
**【{% translate "Location" %}】**

{{finding.location|safe}}
{% endif %}

{% if finding.impact and finding.impact != "请在此处输入内容"%}
**【{% translate "Impact" %}】**

{{finding.impact|safe}}
{% endif %}

{% if finding.poc %}
**【{% translate "Proof of Concept" %}】**

{{finding.poc|safe}}
{% endif %}

{% if finding.recommendation %}
**【{% translate "Recommendation" %}】**

{{finding.recommendation|safe}}
{% endif %}

{% if finding.references and finding.references != "请在此处输入内容"%}
**【{% translate "References" %}】**

{{finding.references|safe}}
{% endif %}

{% if template_custom_fields %}
{{template_custom_fields | safe}}
{% endif %}

{% if template_appendix_in_finding %}
{{template_appendix_in_finding|safe}}
{% endif %}

{% if template_attackflow_in_finding %}
{{template_attackflow_in_finding|safe}}
{% endif %}
