---
inject: true
to: .eslintrc.json
after: "// HYGEN_INJECT"
---
        {
          "module": "features/<%= feature_name %>/**/*",
          "allowReferenceFrom": ["src/page-components/**/*"],
          "allowSameModule": false
        },
