import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 18.5C5 17.3954 5.89543 16.5 7 16.5H17C18.1046 16.5 19 17.3954 19 18.5V21.5H5V18.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 13H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 16L9.89543 11.227C9.95928 10.4564 9.53736 9.74525 9.02107 9.16951C8.38617 8.46149 8 7.52584 8 6.5C8 4.29086 9.79086 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5C16 7.52584 15.6138 8.46149 14.9789 9.16951C14.4626 9.74525 14.0407 10.4564 14.1046 11.227L14.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Stamp',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
