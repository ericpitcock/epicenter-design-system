import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.8924 2.80982L21.4876 9.59547C21.8112 9.85095 22 10.2405 22 10.6528C22 11.3969 21.3969 12 20.6528 12H20V19.5C20 20.6046 19.1046 21.5 18 21.5H6C4.89543 21.5 4 20.6046 4 19.5V12H3.34716C2.60315 12 2 11.3969 2 10.6528C2 10.2405 2.1888 9.85095 2.5124 9.59547L11.1076 2.80982C11.3617 2.60915 11.6761 2.5 12 2.5C12.3239 2.5 12.6383 2.60915 12.8924 2.80982Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 21.5V15.5C14.5 14.9477 14.0523 14.5 13.5 14.5H10.5C9.94772 14.5 9.5 14.9477 9.5 15.5V21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Home07',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
