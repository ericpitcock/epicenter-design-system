import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 20.0005C2.74418 18.329 2 16.2512 2 13.9995C2 10.8143 3.48927 7.9768 5.80949 6.14551', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.5 4.62961C9.58934 4.22255 10.7687 4 12 4C17.5228 4 22 8.47715 22 14C22 15.2313 21.7775 16.4107 21.3704 17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.50087 18C6.56753 16.9385 6 15.5367 6 14C6 11.913 7.04673 10.0749 8.63494 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 14C18 10.6863 15.3137 8 12 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HotspotOffline',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
