import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 17.0793V6.92066C12 6.11163 11.0893 5.63748 10.4265 6.10142L3.17033 11.1808C2.60161 11.5789 2.60162 12.4211 3.17033 12.8192L10.4265 17.8986C11.0893 18.3625 12 17.8884 12 17.0793Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 17.0793V6.92066C22 6.11163 21.0893 5.63748 20.4265 6.10142L13.1703 11.1808C12.6016 11.5789 12.6016 12.4211 13.1703 12.8192L20.4265 17.8986C21.0893 18.3625 22 17.8884 22 17.0793Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Backward02',
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
