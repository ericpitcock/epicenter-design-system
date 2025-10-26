import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.1914 13.3775C20.9247 12.6056 20.9247 11.3944 20.1914 10.6225L13.45 3.52631C12.6615 2.69631 11.3385 2.69631 10.55 3.52631L3.80862 10.6225C3.07529 11.3944 3.07529 12.6056 3.80862 13.3775L10.55 20.4737C11.3385 21.3037 12.6615 21.3037 13.45 20.4737L20.1914 13.3775Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Diamond01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
